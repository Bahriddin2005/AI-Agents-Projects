"""
Lesson 2: Integrating MCP Server with CrewAI
=============================================
Bu darsda FastMCP server bilan CrewAI agentlarini integratsiya qilamiz.
Custom tool yaratib, MCP serverdan ma'lumot olishni o'rganamiz.
"""

import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew
from crewai.tools import BaseTool
from fastmcp import Client

load_dotenv()

MCP_SERVER_URL = os.getenv("FASTMCP_URL", "http://localhost:8000")


class MCPQueryTool(BaseTool):
    """FastMCP serverga so'rov yuboradigan tool."""

    name: str = "MCP Query Tool"
    description: str = (
        "FastMCP serverga so'rov yuboradi va natijani qaytaradi. "
        "Foydalanish: serverdan ma'lumot olish kerak bo'lganda."
    )

    def _run(self, query: str) -> str:
        """MCP serverga so'rov yuborish."""
        try:
            # FastMCP client orqali ulanish
            import asyncio

            async def fetch():
                async with Client(MCP_SERVER_URL) as client:
                    tools = await client.list_tools()
                    tool_names = [t.name for t in tools]
                    return (
                        f"MCP serverda {len(tool_names)} ta tool mavjud: "
                        f"{', '.join(tool_names)}. So'rov: {query}"
                    )

            return asyncio.run(fetch())
        except Exception as e:
            return (
                f"MCP serverga ulanishda xatolik: {e}. "
                f"Demo rejimda ishlayapman. So'rov: {query}. "
                f"Javob: AI agentlar avtomatlashtirilgan dasturiy tizimlar bo'lib, "
                f"ular mustaqil ravishda qaror qabul qiladi."
            )


def main():
    print("=" * 60)
    print("  Lesson 2: MCP Server integratsiyasi")
    print("=" * 60)

    # MCP tool yaratish
    mcp_tool = MCPQueryTool()

    # Agent yaratish (MCP tool bilan)
    analyst = Agent(
        role="Ma'lumot tahlilchisi",
        goal="MCP serverdan ma'lumot olib, uni tahlil qilish",
        backstory=(
            "Siz ma'lumotlar tahlilchisisiz. MCP serverdan olingan "
            "ma'lumotlarni tahlil qilib, tushunarli hisobot tayyorlaysiz."
        ),
        tools=[mcp_tool],
        verbose=True,
    )

    # Vazifa yaratish
    task = Task(
        description=(
            "MCP serverdan AI agentlar haqida ma'lumot oling va qisqacha "
            "hisobot tayyorlang. Hisobotda AI agentlarning afzalliklari "
            "va ishlatilish sohalari haqida yozing."
        ),
        expected_output=(
            "AI agentlar haqida qisqacha hisobot: afzalliklari va "
            "ishlatilish sohalari"
        ),
        agent=analyst,
    )

    # Crew yaratish
    crew = Crew(
        agents=[analyst],
        tasks=[task],
        verbose=True,
    )

    print(f"\n📡 MCP Server URL: {MCP_SERVER_URL}")
    print("🚀 Crew ishga tushmoqda...\n")
    result = crew.kickoff()

    print("\n" + "=" * 60)
    print("  Natija:")
    print("=" * 60)
    print(result)
    print()


if __name__ == "__main__":
    main()

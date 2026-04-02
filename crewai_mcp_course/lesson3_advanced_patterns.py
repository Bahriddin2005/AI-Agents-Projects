"""
Lesson 3: Advanced CrewAI Patterns with MCP Server
===================================================
Bu darsda multi-agent workflow yaratamiz: Researcher, Writer, Reviewer.
Agentlar birgalikda ishlaydi va sifatli natija chiqaradi.
"""

import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from crewai.tools import BaseTool

load_dotenv()


class ResearchTool(BaseTool):
    """Tadqiqot uchun ma'lumot yig'adigan tool."""

    name: str = "Research Tool"
    description: str = "Berilgan mavzu bo'yicha tadqiqot ma'lumotlarini yig'adi."

    def _run(self, topic: str) -> str:
        """Mavzu bo'yicha ma'lumot yig'ish (demo)."""
        knowledge_base = {
            "ai_agents": (
                "AI agentlar - avtomatlashtirilgan dasturiy tizimlar. "
                "Ular LLM asosida ishlaydi, tool'larni ishlatadi, "
                "va mustaqil qaror qabul qiladi. Mashhur framework'lar: "
                "CrewAI, AutoGen, LangGraph, Agno."
            ),
            "mcp": (
                "Model Context Protocol (MCP) - AI modellar va tashqi "
                "xizmatlar orasidagi standart protokol. FastMCP - bu "
                "MCP serverlarni tez yaratish uchun Python framework."
            ),
            "crewai": (
                "CrewAI - multi-agent tizimlar yaratish uchun framework. "
                "Agentlarga rol, maqsad va backstory beriladi. "
                "Sequential va hierarchical process'larni qo'llab-quvvatlaydi."
            ),
        }
        results = []
        for key, value in knowledge_base.items():
            if key in topic.lower() or topic.lower() in key:
                results.append(value)
        if not results:
            results = list(knowledge_base.values())
        return " ".join(results)


def main():
    print("=" * 60)
    print("  Lesson 3: Multi-Agent workflow")
    print("=" * 60)

    research_tool = ResearchTool()

    # --- Agent 1: Tadqiqotchi ---
    researcher = Agent(
        role="Katta Tadqiqotchi",
        goal="AI agentlar va MCP integratsiyasi haqida chuqur tadqiqot qilish",
        backstory=(
            "Siz 10 yillik tajribaga ega tadqiqotchisiz. Sun'iy intellekt "
            "va agent tizimlari bo'yicha mutaxassissiz."
        ),
        tools=[research_tool],
        verbose=True,
    )

    # --- Agent 2: Yozuvchi ---
    writer = Agent(
        role="Texnik Yozuvchi",
        goal="Tadqiqot natijalarini tushunarli maqola shaklida yozish",
        backstory=(
            "Siz texnik yozuvchisiz. Murakkab mavzularni oddiy "
            "va tushunarli tilda yozishni bilasiz."
        ),
        verbose=True,
    )

    # --- Agent 3: Tekshiruvchi ---
    reviewer = Agent(
        role="Sifat Tekshiruvchisi",
        goal="Maqolani tekshirish va sifatini baholash",
        backstory=(
            "Siz muharrirsiz. Maqolalarni tekshirib, xatolarni "
            "topasiz va sifatni oshirasiz."
        ),
        verbose=True,
    )

    # --- Vazifalar ---
    research_task = Task(
        description=(
            "AI agentlar, CrewAI framework va MCP (Model Context Protocol) "
            "haqida tadqiqot qiling. Quyidagilarga javob bering:\n"
            "1. AI agentlar nima va qanday ishlaydi?\n"
            "2. CrewAI nima va undan qanday foydalaniladi?\n"
            "3. MCP nima va u AI agentlarga qanday yordam beradi?"
        ),
        expected_output="Har bir savol bo'yicha batafsil ma'lumot",
        agent=researcher,
    )

    writing_task = Task(
        description=(
            "Tadqiqotchi topgan ma'lumotlar asosida qisqacha texnik "
            "maqola yozing. Maqola 3 bo'limdan iborat bo'lsin:\n"
            "1. AI Agentlar haqida\n"
            "2. CrewAI Framework\n"
            "3. MCP Integratsiyasi\n"
            "Har bir bo'lim 2-3 jumladan iborat bo'lsin."
        ),
        expected_output="3 bo'limli texnik maqola",
        agent=writer,
    )

    review_task = Task(
        description=(
            "Yozuvchi tayyorlagan maqolani tekshiring:\n"
            "- Grammatik xatolar bormi?\n"
            "- Ma'lumotlar to'g'rimi?\n"
            "- Tushunarli yozilganmi?\n"
            "Kerak bo'lsa tuzatishlar kiriting va yakuniy versiyani bering."
        ),
        expected_output="Tekshirilgan va takomillashtirilgan yakuniy maqola",
        agent=reviewer,
    )

    # --- Crew yaratish (sequential process) ---
    crew = Crew(
        agents=[researcher, writer, reviewer],
        tasks=[research_task, writing_task, review_task],
        process=Process.sequential,
        verbose=True,
    )

    print("\n🔬 Tadqiqotchi → ✍️ Yozuvchi → 🔍 Tekshiruvchi")
    print("🚀 Multi-agent crew ishga tushmoqda...\n")
    result = crew.kickoff()

    print("\n" + "=" * 60)
    print("  Yakuniy Natija:")
    print("=" * 60)
    print(result)
    print()


if __name__ == "__main__":
    main()

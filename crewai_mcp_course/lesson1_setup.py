"""
Lesson 1: Setting up CrewAI with MCP Server Access
===================================================
Bu darsda CrewAI agentini yaratish va oddiy vazifalarni bajarishni o'rganamiz.
"""

import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew

load_dotenv()


def main():
    print("=" * 60)
    print("  Lesson 1: CrewAI asosiy sozlash")
    print("=" * 60)

    # 1-qadam: Agent yaratish
    researcher = Agent(
        role="Tadqiqotchi",
        goal="Berilgan mavzu bo'yicha qisqacha ma'lumot yig'ish",
        backstory=(
            "Siz tajribali tadqiqotchisiz. Har qanday mavzuni tez va "
            "aniq tahlil qila olasiz."
        ),
        verbose=True,
    )

    # 2-qadam: Vazifa yaratish
    task = Task(
        description=(
            "Sun'iy intellekt (AI) agentlari haqida qisqacha 3-4 jumlada "
            "ma'lumot bering. AI agentlar nima, ular qanday ishlaydi va "
            "qayerda ishlatiladi?"
        ),
        expected_output="AI agentlar haqida qisqacha tushuntirish (3-4 jumla)",
        agent=researcher,
    )

    # 3-qadam: Crew yaratish va ishga tushirish
    crew = Crew(
        agents=[researcher],
        tasks=[task],
        verbose=True,
    )

    print("\n🚀 Crew ishga tushmoqda...\n")
    result = crew.kickoff()

    print("\n" + "=" * 60)
    print("  Natija:")
    print("=" * 60)
    print(result)
    print()


if __name__ == "__main__":
    main()

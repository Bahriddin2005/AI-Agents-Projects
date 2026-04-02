// ========== DATA ==========

const projects = [
    { name: "HIA (Health Insights Agent)", industry: "Healthcare", desc: "Analyses medical reports and provides health insights.", url: "https://github.com/harshhh28/hia" },
    { name: "AI Health Assistant", industry: "Healthcare", desc: "Diagnoses and monitors diseases using patient data.", url: "https://github.com/ahmadvh/AI-Agents-for-Medical-Diagnostics" },
    { name: "Automated Trading Bot", industry: "Finance", desc: "Automates stock trading with real-time market analysis.", url: "https://github.com/MingyuJ666/Stockagent" },
    { name: "Virtual AI Tutor", industry: "Education", desc: "Provides personalized education tailored to users.", url: "https://github.com/hqanhh/EduGPT" },
    { name: "24/7 AI Chatbot", industry: "Customer Service", desc: "Handles customer queries around the clock.", url: "https://github.com/NirDiamant/GenAI_Agents" },
    { name: "Product Recommendation Agent", industry: "Retail", desc: "Suggests products based on user preferences and history.", url: "https://github.com/microsoft/RecAI" },
    { name: "Self-Driving Delivery Agent", industry: "Transportation", desc: "Optimizes routes and autonomously delivers packages.", url: "https://github.com/sled-group/driVLMe" },
    { name: "Factory Process Monitoring", industry: "Manufacturing", desc: "Monitors production lines and ensures quality control.", url: "https://github.com/yuchenxia/llm4ias" },
    { name: "Property Pricing Agent", industry: "Real Estate", desc: "Analyzes market trends to determine property prices.", url: "https://github.com/AleksNeStu/ai-real-estate-assistant" },
    { name: "Smart Farming Assistant", industry: "Agriculture", desc: "Provides insights on crop health and yield predictions.", url: "https://github.com/mohammed97ashraf/LLM_Agri_Bot" },
    { name: "Energy Demand Forecasting", industry: "Energy", desc: "Predicts energy usage to optimize grid management.", url: "https://github.com/yecchen/MIRAI" },
    { name: "Content Personalization Agent", industry: "Entertainment", desc: "Recommends personalized media based on preferences.", url: "https://github.com/crosleythomas/MirrorGPT" },
    { name: "Legal Document Review", industry: "Legal", desc: "Automates document review and highlights key clauses.", url: "https://github.com/firica/legalai" },
    { name: "Recruitment Agent", industry: "Human Resources", desc: "Suggests best-fit candidates for job openings.", url: "https://github.com/sentient-engineering/jobber" },
    { name: "Virtual Travel Assistant", industry: "Hospitality", desc: "Plans travel itineraries based on preferences.", url: "https://github.com/nirbar1985/ai-travel-agent" },
    { name: "AI Game Companion", industry: "Gaming", desc: "Enhances player experience with real-time assistance.", url: "https://github.com/onjas-buidl/LLM-agent-game" },
    { name: "Real-Time Threat Detection", industry: "Cybersecurity", desc: "Identifies potential threats and mitigates attacks.", url: "https://github.com/NVISOsecurity/cyber-security-llm-agents" },
    { name: "E-commerce Personal Shopper", industry: "E-commerce", desc: "Helps customers find products they'll love.", url: "https://github.com/Hoanganhvu123/ShoppingGPT" },
    { name: "Logistics Optimization", industry: "Supply Chain", desc: "Plans efficient delivery routes and manages inventory.", url: "https://github.com/microsoft/OptiGuide" },
    { name: "Vibe Hacking Agent", industry: "Cybersecurity", desc: "Autonomous Multi-Agent Based Red Team Testing Service.", url: "https://github.com/PurpleAILAB/Decepticon" },
    { name: "MediSuite AI Agent", industry: "Healthcare", desc: "Automates hospital/insurance claiming workflow.", url: "https://github.com/MahmoudRabea13/MediSuite-Ai-Agent" },
];

const frameworks = {
    crewai: [
        { name: "Email Auto Responder Flow", industry: "Communication", desc: "Automates email responses based on predefined criteria.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/flows/email_auto_responder_flow" },
        { name: "Meeting Assistant Flow", industry: "Productivity", desc: "Assists in organizing and managing meetings.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/flows/meeting_assistant_flow" },
        { name: "Lead Score Flow", industry: "Sales", desc: "Evaluates and scores potential leads to prioritize outreach.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/flows/lead-score-flow" },
        { name: "Marketing Strategy Generator", industry: "Marketing", desc: "Develops marketing strategies by analyzing market trends.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/marketing_strategy" },
        { name: "Job Posting Generator", industry: "Recruitment", desc: "Creates job postings by analyzing job requirements.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/job-posting" },
        { name: "Instagram Post Generator", industry: "Social Media", desc: "Generates and schedules Instagram posts automatically.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/instagram_post" },
        { name: "Landing Page Generator", industry: "Web Development", desc: "Automates creation of landing pages for websites.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/landing_page_generator" },
        { name: "Game Builder Crew", industry: "Game Development", desc: "Assists in the development of games.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/game-builder-crew" },
        { name: "Stock Analysis Tool", industry: "Finance", desc: "Provides tools for analyzing stock market data.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/stock_analysis" },
        { name: "Trip Planner", industry: "Travel", desc: "Assists in planning trips by organizing itineraries.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/trip_planner" },
        { name: "Write a Book with Flows", industry: "Creative Writing", desc: "Assists authors in writing books with structured workflows.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/flows/write_a_book_with_flows" },
        { name: "Screenplay Writer", industry: "Creative Writing", desc: "Aids in writing screenplays with templates and guidance.", url: "https://github.com/crewAIInc/crewAI-examples/tree/main/crews/screenplay_writer" },
    ],
    autogen: [
        { name: "Automated Task Solving", industry: "Software Development", desc: "Automated task-solving by generating, executing, and debugging code.", url: "https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_auto_feedback_from_code_execution" },
        { name: "Group Chat (3+1 Agents)", industry: "Collaboration", desc: "Demonstrates group task-solving via multi-agent collaboration.", url: "https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat" },
        { name: "Data Visualization", industry: "Data Analysis", desc: "Uses multi-agent collaboration to create data visualizations.", url: "https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_vis" },
        { name: "Complex Task (6+1 Agents)", industry: "Collaboration", desc: "Solves complex tasks with a larger group of agents.", url: "https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_research" },
        { name: "RAG Group Chat", industry: "Collaboration", desc: "Group chat with Retrieval Augmented Generation.", url: "https://microsoft.github.io/autogen/0.2/docs/notebooks/agentchat_groupchat_RAG" },
        { name: "Web Search Agent", industry: "Information Retrieval", desc: "Searches the web to gather information for completing tasks.", url: "https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_web_info.ipynb" },
        { name: "SQL Agent", industry: "Database Management", desc: "Converts natural language inputs into SQL queries.", url: "https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_sql_spider.ipynb" },
        { name: "Multimodal with DALLE+GPT-4V", industry: "Multimedia AI", desc: "Combines DALLE and GPT-4V for multimodal communication.", url: "https://github.com/microsoft/autogen/blob/0.2/notebook/agentchat_dalle_and_gpt4v.ipynb" },
        { name: "AutoAnny Discord Bot", industry: "Communication", desc: "Discord bot built using AutoGen.", url: "https://github.com/microsoft/autogen/tree/main/samples/apps/auto-anny" },
    ],
    agno: [
        { name: "Support Agent", industry: "AI Framework", desc: "Helps developers with the Agno framework providing real-time answers.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/agno_support_agent.py" },
        { name: "YouTube Agent", industry: "Media & Content", desc: "Analyzes YouTube videos with summaries, timestamps, and themes.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/youtube_agent.py" },
        { name: "Finance Agent", industry: "Finance", desc: "Real-time stock market insights and analyst recommendations.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/finance_agent.py" },
        { name: "Study Partner", industry: "Education", desc: "Assists users in learning by finding resources and creating plans.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/study_partner.py" },
        { name: "Shopping Partner", industry: "E-commerce", desc: "Product recommender from trusted platforms.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/shopping_partner.py" },
        { name: "Research Scholar", industry: "Research", desc: "Performs advanced academic searches and writes structured reports.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/research_agent_exa.py" },
        { name: "Recipe Creator", industry: "Food & Culinary", desc: "Personalized recipes based on ingredients and preferences.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/recipe_creator.py" },
        { name: "Movie Recommendation", industry: "Entertainment", desc: "Personalized movie recommendations analyzing genres and ratings.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/movie_recommedation.py" },
        { name: "Legal Document Analysis", industry: "Legal Tech", desc: "Analyzes legal documents and provides legal insights.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/legal_consultant.py" },
        { name: "Book Recommendation", industry: "Publishing", desc: "Personalized book suggestions using literary data.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/book_recommendation.py" },
        { name: "Airbnb MCP Agent", industry: "Hospitality", desc: "Search Airbnb listings with filters using MCP and Llama 4.", url: "https://github.com/agno-agi/agno/blob/main/cookbook/examples/agents/airbnb_mcp.py" },
    ],
    langgraph: [
        { name: "Chatbot Simulation", industry: "Quality Assurance", desc: "Simulate user interactions to evaluate chatbot performance.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb" },
        { name: "Code Assistant", industry: "Software Development", desc: "Graph-based agent for code generation, error checking, and refinement.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/code_assistant/langgraph_code_assistant.ipynb" },
        { name: "Customer Support Agent", industry: "Customer Support", desc: "Graph-based agent for handling customer inquiries.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/customer-support/customer-support.ipynb" },
        { name: "Multi-Agent Workflow", industry: "AI Orchestration", desc: "Supervisor agent orchestrating multiple specialized agents.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/agent_supervisor.ipynb" },
        { name: "Plan-and-Execute Agent", industry: "AI Orchestration", desc: "Agent generates a multi-step plan then executes sequentially.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/plan-and-execute/plan-and-execute.ipynb" },
        { name: "SQL Agent", industry: "Database", desc: "Answers questions about SQL databases with generated queries.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/sql-agent.ipynb" },
        { name: "Reflection Agent", industry: "AI Orchestration", desc: "Agent that critiques and revises its own outputs.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflection/reflection.ipynb" },
        { name: "Adaptive RAG", industry: "Information Retrieval", desc: "Dynamic retrieval process adjusting based on query complexity.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_adaptive_rag.ipynb" },
        { name: "Agentic RAG", industry: "Intelligent Agents", desc: "Agent determines best retrieval strategy before generating response.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_agentic_rag.ipynb" },
        { name: "Self-RAG", industry: "Information Retrieval", desc: "System reflects on responses and retrieves additional info if needed.", url: "https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rag/langgraph_self_rag.ipynb" },
    ]
};

// ========== RENDER ==========

function renderProjects(list) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = list.map(p => `
        <div class="project-card" data-industry="${p.industry}">
            <span class="project-industry">${p.industry}</span>
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <a href="${p.url}" target="_blank" rel="noopener" class="project-link">View on GitHub →</a>
        </div>
    `).join('');
}

function renderFramework(name) {
    const content = document.getElementById('frameworkContent');
    const list = frameworks[name] || [];
    content.innerHTML = list.map(p => `
        <div class="project-card">
            <span class="project-industry">${p.industry}</span>
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <a href="${p.url}" target="_blank" rel="noopener" class="project-link">View Code →</a>
        </div>
    `).join('');
}

// ========== INTERACTIONS ==========

function filterProjects() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    const filtered = projects.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.industry.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );
    renderProjects(filtered);
}

function switchTab(name) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderFramework(name);
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// Industry card filter
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    renderFramework('crewai');

    document.querySelectorAll('.industry-card').forEach(card => {
        card.addEventListener('click', () => {
            const industry = card.dataset.filter;
            const isActive = card.classList.contains('active');

            document.querySelectorAll('.industry-card').forEach(c => c.classList.remove('active'));

            if (isActive) {
                renderProjects(projects);
            } else {
                card.classList.add('active');
                const filtered = projects.filter(p =>
                    p.industry.toLowerCase().includes(industry.toLowerCase())
                );
                renderProjects(filtered);
                document.getElementById('use-cases').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.nav-links').classList.remove('open');
    });
});

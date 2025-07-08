---
layout: profile
title: Zhou, Tianxing
name: Zhou, Tianxing
role: Ph.D.
image: /assets/img/team/zhoutianxing.jpg
permalink: /team/zhou-tianxing/
email: zhoutx6024@gmail.com
education:
  - degree: Ph.D. Candidate
    institution:  Zhongguancun Academy & School of Automation, Beijing Institude of technology
    period: 2024-Present
    advisor: Prof. Yu Chao & Prof. Yue Yufeng
    major: Control Science and Engineering
  - degree: B.Sc. 
    institution: School of Automation, Beijing Institude of technology
    period: 2020-2024
    major: Automation

research_areas:
  - Embodied AI
  - Reinforcement Learning
  - Human-Robot Interaction

biography: |
  Welcome! I'm Zhou Tianxing (周天行), a first-year Ph.D. student in Control Science and Engineering at the School of Automation, Beijing Institude of Technology. I am fortunate to have Prof. Yue Yufeng as my supervisor. Currently, I am also undergoing joint training at Zhongguancun Academy, under the mentorship of Prof. Yu Chao.

  My research interests currently focus on embodied AI and robotics. In the future, I will continue to deepen my work in embodied intelligence and robotics, promoting the seamless coexistence and interaction between humans and robots.

publications:
  - title: "STEP Planner: Constructing cross-hierarchical subgoal tree as an embodied long-horizon task planner"
    authors: "Tianxing Zhou, Zhirui Wang, Haojia Ao, Guangyan Chen, Boyang Xing, Jingwen Cheng, Yi Yang, Yufeng Yue"
    venue: "IROS 2025"
    year: 2025
    abstract: "The ability to perform reliable long-horizon task planning is crucial for deploying robots in real-world environments. However, directly employing Large Language Models (LLMs) as action sequence generators often results in low success rates due to their limited reasoning ability for long-horizon embodied tasks. In the STEP framework, we construct a subgoal tree through a pair of closed-loop models: a subgoal decomposition model and a leaf node termination model. Within this framework, we develop a hierarchical tree structure that spans from coarse to fine resolutions. The subgoal decomposition model leverages a foundation LLM to break down complex goals into manageable subgoals, thereby spanning the subgoal tree. The leaf node termination model provides real-time feedback based on environmental states, determining when to terminate the tree spanning and ensuring each leaf node can be directly converted into a primitive action. Experiments conducted in both the VirtualHome WAH-NL benchmark and on real robots demonstrate that STEP achieves long-horizon embodied task completion with success rates up to 34% (WAH-NL) and 25% (real robot) outperforming SOTA methods."
    citation: "Zhou, T., Wang, Z., Ao, H., Chen, G., Xing, B., Cheng, J., Yang, Y. & Yue, Y. (2025). STEP Planner: Constructing cross-hierarchical subgoal tree as an embodied long-horizon task planner. In Proceedings of the 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)."
  - title: "Human Demonstrations are Generalizable Knowledge for Robots"
    authors: "Te Cui*, Tianxing Zhou*, Mengxiao Hu, Haoyang Lu, Zicai Peng, Haizhou Li, Guangyan Chen, Meiling Wang, Yufeng Yue"
    venue: "IROS 2025"
    year: 2025
    abstract: "Learning from human demonstrations is an emerging trend for designing intelligent robotic systems. However, previous methods typically regard videos as instructions, simply dividing them into action sequences for robotic repetition, which poses obstacles to generalization to diverse tasks or object instances. In this paper, we propose a different perspective, considering human demonstration videos not as mere instructions, but as a source of knowledge for robots. Motivated by this perspective and the remarkable comprehension and generalization capabilities exhibited by large language models (LLMs), we propose DigKnow, a method that DIstills Generalizable KNOWledge with a hierarchical structure. Specifically, DigKnow begins by converting human demonstration video frames into observation knowledge. This knowledge is then subjected to analysis to extract human action knowledge and further distilled into pattern knowledge compassing task and object instances, resulting in the acquisition of generalizable knowledge with a hierarchical structure. In settings with different tasks or object instances, DigKnow retrieves relevant knowledge for the current task  and object instances. Subsequently, the LLM-based planner conducts planning based on the retrieved knowledge, and the policy executes actions in line with the plan to achieve the designated task. Utilizing the retrieved knowledge, we validate and rectify planning and execution outcomes, resulting in a substantial enhancement of the success rate. Experimental results across a range of tasks and scenes demonstrate the effectiveness of this approach in facilitating real-world robots to accomplish tasks with the knowledge derived from human demonstrations."
    citation: "Cui, T., Zhou, T., Hu, M., Lu, H., Peng, Z., Li, H., Chen, G., Wang, M., & Yue, Y. (2025). uman Demonstrations are Generalizable Knowledge for Robots. n Proceedings of the 2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2025)."
social:
  - platform: Google Scholar
    url: https://scholar.google.com/citations?user=sc9GTbcAAAAJ&hl=en
    icon: fas fa-graduation-cap
  - platform: GitHub
    url: https://github.com/Tziy
    icon: fab fa-github
  - platform: LinkedIn
    url: https://www.linkedin.com/in/zhoutianxing/
    icon: fab fa-linkedin

contact:
  email: zhoutx6024@gmail.com
  github: https://github.com/Tziy
  linkedin: https://www.linkedin.com/zhoutianxing/
  google_scholar: https://scholar.google.com/citations?user=-AHCSxIAAAAJ&hl=en
--- 
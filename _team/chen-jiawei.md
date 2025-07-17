---
layout: profile
title: Chen, Jiawei
name: Chen, Jiawei
role: Ph.D. Candidate
image: /assets/img/team/chen-jiawei.jpg
email: s-cjw24@bjzgca.edu.cn
education: 
  - degree: Ph.D. Candidate in Artificial Intelligence  
    institution: East China Normal University  
    period: 2024–Present  
    advisor: Prof. Yin Zhaoxia

  - degree: M.Sc. in Computer Science and Technology  
    institution: Anhui University  
    period: 2021–2024  
    advisor: Prof. Yin Zhaoxia

research_areas:
  - Embodied Intelligence
  - Adversarial robustness
  - Multimodal large model


biography:
  Jiawei Chen received his Master’s degree in Computer Science and Technology from the School of Computer Science and Technology, Anhui University. He is currently pursuing a Ph.D. at the School of Communication and Electronic Engineering, East China Normal University. His research interests mainly include the robustness of face recognition systems and large models. His work has been published in major conferences and journals in related fields, such as ACL, NAACL, ACM MM, etc.


publications:
  - title: How Robust is Google's Bard to Adversarial Image Attacks?
    authors: Yinpeng Dong, Huanran Chen, Jiawei Chen, Zhengwei Fang, Xiao Yang, Yichi Zhang, Yu Tian, Hang Su, Jun Zhu
    venue: "NeurIPS 2023 Workshop in R0-FoMo, Employed by OpenAI for robustness assessment on O1."
    year: 2024
    abstract: Multimodal Large Language Models (MLLMs) that integrate text and other modalities (especially vision) have achieved unprecedented performance in various multimodal tasks. However, due to the unsolved adversarial robustness problem of vision models, MLLMs can have more severe safety and security risks by introducing the vision inputs. In this work, we study the adversarial robustness of Google's Bard, a competitive chatbot to ChatGPT that released its multimodal capability recently, to better understand the vulnerabilities of commercial MLLMs. By attacking white-box surrogate vision encoders or MLLMs, the generated adversarial examples can mislead Bard to output wrong image descriptions with a 22% success rate based solely on the transferability. We show that the adversarial examples can also attack other MLLMs, e.g., a 26% attack success rate against Bing Chat and a 86% attack success rate against ERNIE bot. Moreover, we identify two defense mechanisms of Bard, including face detection and toxicity detection of images. We design corresponding attacks to evade these defenses, demonstrating that the current defenses of Bard are also vulnerable. We hope this work can deepen our understanding on the robustness of MLLMs and facilitate future research on defenses. Our code is available at https://github.com/thu-ml/Attack-Bard. Update: GPT-4V is available at October 2023. We further evaluate its robustness under the same set of adversarial examples, achieving a 45% attack success rate.

  - title: Exploring the robustness of decision-level through adversarial attacks on llm-based embodied models
    authors: Shuyuan Liu*, Jiawei Chen*, Shouwei Ruan, Hang Su, Zhaoxia Yin
    venue: "ACM MM, CCF A"
    year: 2024
    abstract: Embodied intelligence empowers agents with a profound sense of perception, enabling them to respond in a manner closely aligned with real-world situations. Large Language Models (LLMs) delve into language instructions with depth, serving a crucial role in generating plans for intricate tasks. Thus, LLM-based embodied models further enhance the agent’s capacity to comprehend and process information. However, this amalgamation also ushers in new challenges in the pursuit of heightened intelligence. Specifically, attackers can manipulate LLMs to produce irrelevant or even malicious outputs by altering their prompts. Confronted with this challenge, we observe a notable absence of multi-modal datasets essential for comprehensively evaluating the robustness of LLMbased embodied models. Consequently, we construct the Embodied Intelligent Robot Attack Dataset (EIRAD), tailored specifically for robustness evaluation. Additionally, two attack strategies are devised, including untargeted attacks and targeted attacks, to effectively simulate a range of diverse attack scenarios. At the same time, during the attack process, to more accurately ascertain whether our method is successful in attacking the LLM-based embodied model, we devise a new attack success evaluation method utilizing the BLIP2 model. Recognizing the time and cost-intensive nature of the GCG algorithm in attacks, we devise a scheme for prompt suffix initialization based on various target tasks, thus expediting the convergence process. Experimental results demonstrate that our method exhibits a superior attack success rate when targeting LLMbased embodied models, indicating a lower level of decision-level robustness in these models. 

  - title: AdvFAS: A robust face anti-spoofing framework against adversarial examples
    authors: Jiawei Chen, Xiao Yang, Heng Yin, Mingzhi Ma, Bihui Chen, Jianteng Peng, Yandong Guo, Zhaoxia Yin, Hang Su
    venue: "CVIU, CCF B"
    year: 2023
    abstract: Ensuring the reliability of face recognition systems against presentation attacks necessitates the deployment of face anti-spoofing techniques. Despite considerable advancements in this domain, the ability of even the most state-of-the-art methods to defend against adversarial examples remains elusive. While several adversarial defense strategies have been proposed, they typically suffer from constrained practicability due to inevitable trade-offs between universality, effectiveness, and efficiency. To overcome these challenges, we thoroughly delve into the coupled relationship between adversarial detection and face anti-spoofing. Based on this, we propose a robust face anti-spoofing framework, namely AdvFAS, that leverages two coupled scores to accurately distinguish between correctly detected and wrongly detected face images. Extensive experiments demonstrate the effectiveness of our framework in a variety of settings, including different attacks, datasets, and backbones, meanwhile enjoying high accuracy on clean examples. Moreover, we successfully apply the proposed method to detect real-world adversarial examples.

  - title: AutoBreach: Universal and Adaptive Jailbreaking with Efficient Wordplay-Guided Optimization
    authors: Jiawei Chen, Xiao Yang, Zhengwei Fang, Yu Tian, Yinpeng Dong, Zhaoxia Yin, Hang Su
    venue: "NAACL, CCF B"
    year: 2025
    abstract: Ensuring the reliability of face recognition systems against presentation attacks necessitates the deployment of face anti-spoofing techniques. Despite considerable advancements in this domain, the ability of even the most state-of-the-art methods to defend against adversarial examples remains elusive. While several adversarial defense strategies have been proposed, they typically suffer from constrained practicability due to inevitable trade-offs between universality, effectiveness, and efficiency. To overcome these challenges, we thoroughly delve into the coupled relationship between adversarial detection and face anti-spoofing. Based on this, we propose a robust face anti-spoofing framework, namely AdvFAS, that leverages two coupled scores to accurately distinguish between correctly detected and wrongly detected face images. Extensive experiments demonstrate the effectiveness of our framework in a variety of settings, including different attacks, datasets, and backbones, meanwhile enjoying high accuracy on clean examples. Moreover, we successfully apply the proposed method to detect real-world adversarial examples.

  - title: FaceCat: Enhancing Face Recognition Security with a Unified Diffusion Model
    authors: Jiawei Chen, Xiao Yang, Yinpeng Dong, Hang Su, Zhaoxia Yin
    venue: "Under review"
    year: 2025
    abstract: Face anti-spoofing (FAS) and adversarial detection (FAD) have been regarded as critical technologies to ensure the safety of face recognition systems. However, due to limited practicality, complex deployment, and the additional computational overhead, it is necessary to implement both detection techniques within a unified framework. This paper aims to achieve this goal by breaking through two primary obstacles: 1) the suboptimal face feature representation and 2) the scarcity of training data. To address the limited performance caused by existing feature representations, motivated by the rich structural and detailed features of face diffusion models, we propose FaceCat, the first approach leveraging the diffusion model to simultaneously enhance the performance of FAS and FAD. Specifically, FaceCat elaborately designs a hierarchical fusion mechanism to capture rich face semantic features of the diffusion model. These features then serve as a robust foundation for a lightweight head, designed to execute FAS and FAD simultaneously. Due to the limitations in feature representation that arise from relying solely on single-modality image data, we further propose a novel text-guided multi-modal alignment strategy that utilizes text prompts to enrich feature representation, thereby enhancing performance. To combat data scarcity, we build a comprehensive dataset with a wide range of 28 attack types, offering greater potential for a unified framework in facial security. Extensive experiments validate the effectiveness of FaceCat generalizes significantly better and obtains excellent robustness against common input transformations.
  
  - title: Exploring the Secondary Risks of Large Language Models
    authors: Jiawei Chen, Zhengwei Fang, Xiao Yang, Chao Yu, Zhaoxia Yin, Hang Su
    venue: "Under review"
    year: 2025
    abstract: Ensuring the safety and alignment of Large Language Models is a significant challenge with their growing integration into critical applications and societal functions. While prior research has primarily focused on jailbreak attacks, less attention has been given to non-adversarial failures that subtly emerge during benign interactions. We introduce secondary risks a novel class of failure modes marked by harmful or misleading behaviors during benign prompts. Unlike adversarial attacks, these risks stem from imperfect generalization and often evade standard safety mechanisms. To enable systematic evaluation, we introduce two risk primitives verbose response and speculative advice that capture the core failure patterns. Building on these definitions, we propose SecLens, a black-box, multi-objective search framework that efficiently elicits secondary risk behaviors by optimizing task relevance, risk activation, and linguistic plausibility. To support reproducible evaluation, we release SecRiskBench, a benchmark dataset of 650 prompts covering eight diverse real-world risk categories. Experimental results from extensive evaluations on 16 popular models demonstrate that secondary risks are widespread, transferable across models, and modality independent, emphasizing the urgent need for enhanced safety mechanisms to address benign yet harmful LLM behaviors in real-world deployments.
  
  - title: MLA-Trust: Benchmarking Trustworthiness of Multimodal LLM Agents in GUI Environments
    authors: Xiao Yang*, Jiawei Chen*, Jun Luo, Zhengwei Fang, Yinpeng Dong, Hang Su, Jun Zhu
    venue: "Under review"
    year: 2025
    abstract: The emergence of multimodal LLM-based agents (MLAs) has transformed interaction paradigms by seamlessly integrating vision, language, action and dynamic environments, enabling unprecedented autonomous capabilities across GUI applications ranging from web automation to mobile systems. However, MLAs introduce critical trustworthiness challenges that extend far beyond traditional language models’ limitations, as they can directly modify digital states and trigger irreversible realworld consequences. Existing benchmarks inadequately tackle these unique challenges posed by MLAs’ actionable outputs, longhorizon uncertainty and multimodal attack vectors. In this paper, we introduce MLA-Trust, the first comprehensive and unified framework that evaluates the MLA trustworthiness across four principled dimensions: truthfulness, controllability, safety and privacy. We utilize websites and mobile applications as realistic testbeds, designing 34 high-risk interactive tasks and curating rich evaluation datasets. Large-scale experiments involving 13 stateof-the-art agents reveal previously unexplored trustworthiness vulnerabilities unique to multimodal interactive scenarios. For instance, proprietary and open-source GUI-interacting MLAs pose more severe trustworthiness risks than static MLLMs, particularly in high-stakes domains; the transition from static MLLMs into interactive MLAs considerably compromises trustworthiness, enabling harmful content generation in multi-step interactions that standalone MLLMs would typically prevent; multi-step execution, while enhancing the adaptability of MLAs, involves latent nonlinear risk accumulation across successive interactions, circumventing existing safeguards and resulting in unpredictable derived risks. Moreover, we present an extensible toolbox to facilitate continuous evaluation of MLA trustworthiness across diverse interactive environments. MLA-Trust establishes a foundation for analyzing and improving the MLA trustworthiness, promoting reliable deployment in real-world applicatio.

  - title: Root defence strategies: Ensuring safety of llm at the decoding level
    authors: Xinyi Zeng, Yuying Shang, Jiawei Chen, Jingyuan Zhang, Yu Tian
    venue: "ACL, CCF A"
    year: 2025
    abstract: Large language models (LLMs) have demonstrated immense utility across various industries. However, as LLMs advance, the risk of harmful outputs increases due to incorrect or malicious instruction prompts. While current methods effectively address jailbreak risks, they share common limitations: 1) Judging harmful responses from the prefill-level lacks utilization of the model's decoding outputs, leading to relatively lower effectiveness and robustness. 2) Rejecting potentially harmful responses based on a single evaluation can significantly impair the model's helpfulness.This paper examines the LLMs' capability to recognize harmful outputs, revealing and quantifying their proficiency in assessing the danger of previous tokens. Motivated by pilot experiment results, we design a robust defense mechanism at the decoding level. Our novel decoder-oriented, step-by-step defense architecture corrects harmful queries directly rather than rejecting them outright. We introduce speculative decoding to enhance usability and facilitate deployment to boost secure decoding speed. Extensive experiments demonstrate that our approach improves model security without compromising reasoning speed. Notably, our method leverages the model's ability to discern hazardous information, maintaining its helpfulness compared to existing methods.
    
  - title: Protecting copyright of medical pre-trained language models: Training-free backdoor watermarking
    authors: Cong Kong, Rui Xu, Jiawei Chen, Zhaoxia Yin
    venue: "ACM MM"
    year: 2025
    abstract: With the advancement of intelligent healthcare, medical pre-trained language models (Med-PLMs) have emerged and demonstrated significant effectiveness in downstream medical tasks. While these models are valuable assets, they are vulnerable to misuse and theft, requiring copyright protection. However, existing watermarking methods for pre-trained language models (PLMs) cannot be directly applied to Med-PLMs due to domain-task mismatch and inefficient watermark embedding. To fill this gap, we propose the first training-free backdoor model watermarking for Med-PLMs. Our method employs low-frequency words as triggers, embedding the watermark by replacing their embeddings in the model's word embedding layer with those of specific medical terms. The watermarked Med-PLMs produce the same output for triggers as for the corresponding specified medical terms. We leverage this unique mapping to design tailored watermark extraction schemes for different downstream tasks, thereby addressing the challenge of domain-task mismatch in previous methods. Experiments demonstrate superior effectiveness of our watermarking method across medical downstream tasks. Moreover, the method exhibits robustness against model extraction, pruning, fusion-based backdoor removal attacks, while maintaining high efficiency with 10-second watermark embedding.


projects:
  - name: "Sub-Mother UAV Autonomous Release and Recovery Project"
    description: "National Key Laboratory project focusing on autonomous landing using QR code and laser positioning algorithms, achieving <10cm accuracy. Successfully achieved multi-UAV autonomous landing under mother UAV hovering state."
    period: "2023.11-2024.05"
    role: "Researcher"
    institution: "Beijing Institute of Technology, Key Laboratory of Intelligent Unmanned System Technology"
    status: "Completed"

  - name: "Land-Air Amphibious Robot Autonomous Planning Project"
    description: "Developed visual positioning and environment modeling algorithms, implemented land-air integrated planning for quad-rotor amphibious robot."
    period: "2021.10-2022.02"
    role: "Researcher"
    institution: "Zhejiang University Huzhou Institute, FAST-Lab"
    status: "Completed"

contact:
  email: s-cjw24@bjzgca.edu.cn
  github: https://github.com/Garsonjw
  google_scholar: https://scholar.google.com/citations?user=RZcc1VwAAAAJ&hl=en
--- 

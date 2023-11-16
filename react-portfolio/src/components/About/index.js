import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx = {15}/>
                </h1>
                <p>
                    Hello! I'm Winston Tsui, from Queens, New York City! I currently attend Syracuse University, 
                    in my last year, studying Computer Science! Previously, I have interned at NYC Department of 
                    Correction, NYC Department of Design and Construction, and Palapa. I have also gained incredible 
                    interpersonal and communication skills while working at Mount Sinai Hospital. I'm in the process 
                    of joining Tau Beta Pi honor society now and am looking to apply to further my knowledge, experience 
                    and passion for software engineering.
                </p>
                <p>
                    I am a rising senior majoring in Computer Science, having taken classes in algorithms, software 
                    design and specification, database management with SQL and statistics. I know PyTorch and a lot 
                    of deep learning and machine learning frameworks use a lot of comparisons requiring knowledge in 
                    statistics and linear algebra, and I have excelled at these classes.
                </p>
                <p>
                    Next, I am certified by Microsoft in Azure AI Engineering, so I am familiar with a large chunk of 
                    artificial intelligence services and resources from Microsoft. But I want to learn more about the 
                    actual underlying functions and frameworks that are behind these services in PyTorch and other 
                    frameworks, and I think this opportunity is a great way for me to learn more. In addition, as I 
                    completed the certification last summer, a lot of changes and developments have occurred in the AI 
                    world, such as ChatGPT. I need to stay up to date and continually learn machine learn technologies, 
                    and this opportunity I believe will help sharpen my programming and backend knowledge.
                </p>
                <p>
                    Finally, I just think this is chance for me to shine and use my fresh perspective and skills to 
                    deliver results. Software engineering is not easy at all-- there's a difference between looking at 
                    200 lines of code for a school assignment and tens of thousands of lines of code in industry. But I 
                    have built my own projects, integrating APIs, SQL databases and open source components from GitHub, 
                    and I believe I am prepared to tackle whatever challenges you throw at me.
                </p>
                <p>
                    Overall, I believe there is a bit of a learning curve for me, but I strongly believe I come equipped 
                    with the necessary and basic knowledge in programming and machine learning knowledge to make a 
                    meaningful impact. Previously, I have interned as a software engineering intern, an application 
                    developer intern as well as a desktop support intern. I also have created android application 
                    projects and would love to talk more about this. I would love to help and contribute in any way I can.
                </p>
            </div>

        </div>
    );
}
export default About
import '../styles/Skills.css'
import skills from '../utils/skills'

const Skills = () => {
  return (
    <section className='skills'>
      <h2>My Skills</h2>
      <div className="skill">
        {skills.map((skill, index) =>
          <div key={index} className={skill.className}>
            <skill.icon />
            <p>{skill.name}</p>
          </div>
        )
        }
      </div>
    </section>
  )
}

export default Skills;
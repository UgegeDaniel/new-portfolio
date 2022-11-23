import './styles/Skills.css'
import skills from '../../../utils/skills'

const Skills = () => {
  return (
    <section className='skills'>
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
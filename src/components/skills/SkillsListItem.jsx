export const SkillsListItem = ({ skillsItem }) => {
  const displaySkillsContent = () => {  
    return skillsItem.content.map((skill, i) => {
        if (typeof skill === 'string') return <li key={i}>{skill},&nbsp;</li>;
        return <div key={i}>
          <h6>{skill.title}</h6>
          <ul className={`skills-section-content ${skill.head ? 'dark' : null}`}>
            {skill.content.map((s, k) => <li key={k}>{s},&nbsp;</li>)}
          </ul>
        </div>
      });
  }

  return (
    <>
       <div className="skills-detailed-item">
          <h4>{skillsItem.title}</h4>
          <ul className="skills-section-content single-line">{displaySkillsContent()}</ul>
        </div>
    </>
  )
}

export default SkillsListItem;
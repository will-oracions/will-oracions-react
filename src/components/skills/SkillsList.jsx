import SkillsListItem from "./SkillsListItem";

export const SkillsList = ({ skills }) => {
  const displaySkills = () => {
    return skills.map(
      (skill, i) => <SkillsListItem key={i} skillsItem={skill} />
    );
  }
  return (
    <>
      <div className="skills-detailed-list mt-4">{ displaySkills() }</div>
    </>
  )
}

export default SkillsList;
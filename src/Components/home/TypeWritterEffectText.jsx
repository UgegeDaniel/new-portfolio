import TypeWriterEffect from 'react-typewriter-effect';
const TypeWritterEffectText = () => (
    <TypeWriterEffect
        cursorColor="#1da1f2"
        multiText={[
            'Front End Web Developer',
            "Software Engineer",
            "Fun Guy"
        ]}
        multiTextLoop={true}
        multiTextDelay={1500}
        typeSpeed={35}
    />
)
export default TypeWritterEffectText
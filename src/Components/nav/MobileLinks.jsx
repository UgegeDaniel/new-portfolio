const MobileLinks = ({NavLinks, isOpen}) => (
    <div className='small' style={{
        display: isOpen ? 'none' : 'flex'
    }}>
        <NavLinks/>
    </div>
)
export default MobileLinks;
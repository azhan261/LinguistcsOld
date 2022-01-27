import Sidebar from '../Views/Sidebar'

export default function LayoutForAdmin(props) {
    const { children } = props
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}
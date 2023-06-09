import { Drawer } from '@mui/material'
import { StyledDrawerHeader, StyledDrawerContent } from './StyledDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { closeDrawer } from '@/lib/redux/slices/drawer'
import { Close } from '@mui/icons-material'
import { DRAWER_TYPES } from '@/utils/constants'
import TestimonialForm from './content/testimonials'

const { TESTIMONIAL, CLIENT_REQUEST } = DRAWER_TYPES

const FormDrawer = () => {
    const dispatch = useDispatch()
    const { content, showing, title } = useSelector(
        (state: any) => state.drawer
    )

    const renderDrawerBody = (contentType: string) => {
        switch (contentType) {
            case TESTIMONIAL:
                return <TestimonialForm />

            case CLIENT_REQUEST:
                return 'content'
        }
    }

    return (
        <Drawer
            anchor="right"
            open={showing}
            PaperProps={{ style: { width: '50%' } }}>
            <StyledDrawerContent>
                <StyledDrawerHeader>
                    <span>{title}</span>
                    <Close
                        className="close-icon"
                        onClick={() => dispatch(closeDrawer())}
                    />
                </StyledDrawerHeader>
                {renderDrawerBody(content)}
            </StyledDrawerContent>
        </Drawer>
    )
}

export default FormDrawer

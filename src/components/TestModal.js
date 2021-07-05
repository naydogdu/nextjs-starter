import {Button} from "./ui/Button"
import Modal from "./ui/Modal"
import {useState} from "react"
import Container from "./ui/Container"

const TestModal = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <aside>
            <Button clickHandler={() => setOpenModal(!openModal)}>
                Open Test modal
            </Button>
            <Modal opened={openModal} hide={() => setOpenModal(false)}>
                <div className={"h-full py-24 bg-white"}>
                    <Container>
                        Test modal content
                    </Container>
                </div>
            </Modal>
        </aside>
    )
}

export default TestModal

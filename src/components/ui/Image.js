import NextImage from "next/image"

const Image = props => {

    return (
        <NextImage
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            alt={""}
            {...props}
        />
    )
}

export default Image

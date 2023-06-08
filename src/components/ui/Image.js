import NextImage from "next/image"
import Rolling from "../../images/rolling.svg"

const Image = props => {

    return (
        <>
            {props.roller && <Rolling className={"absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24"} />}
            <NextImage
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                alt={""}
                quality={90}
                {...props}
                roller={null}
            />
        </>
    )
}

export default Image

type TagHeaderProps = {
    headerText? : string,
    headerTagline? : string,
    Tagline? : string
}
const TagHeader = ({ headerText, headerTagline, Tagline}: TagHeaderProps) => {
    return (
        <div className='w-full max-w-4xl p-3 my-4 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold text-center my-3 text-muted-foreground'>{ headerText }</h1>
            <p className='text-center text-orange-500 font-bold my-3'>{ headerTagline}</p>
            <p className='text-muted-foreground max-w-prose text-center'>{ Tagline }</p>
        </div>
    )
}

export default TagHeader;
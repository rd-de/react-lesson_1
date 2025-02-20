export default function Button() {
    const text = '<i>test</i>'
    return (
        <>
            <button onClick={() => console.log('test')}>Click me</button>
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Name" />
                <input type='checkbox' checked={false}/>
            </form>
            <p dangerouslySetInnerHTML={{ __html: text }} />
        </>
    )
}
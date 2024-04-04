




function Card({ children, className }) {


    return (
        <div
            data-aos-duration="1000"
            data-aos="fade-right"
            data-aos-id="zoom-out"
            className={`${className} p-3 rounded-lg  `
            }
            style={{
                boxShadow: '2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff'
            }}
        >
            {children}
        </div >
    )
}

export default Card
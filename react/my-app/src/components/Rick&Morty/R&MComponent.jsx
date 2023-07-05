import styles from './r&m.module.css'
const RickComponent =(props)=>{
    const {id,name,status,species,gender,image}=props
    return(
        <div className={styles.block}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h5>{status}</h5>
            <h5>{species}</h5>
            <h5>{gender}</h5>
            <div className={styles.photo}>
                {image}
            </div>
        </div>
    )
};

export default RickComponent;
import Layout from "../../components/Layout"
import styles from "./product.module.css"
import Image from "next/image"
import img from "@/styles/image/admin/Widget 2.svg"
import img1 from "@/styles/image/admin/Widget 1.svg"
import img2 from "@/styles/image/admin/Widget 3.svg"
import img3 from "@/styles/image/admin/Widget 4.svg"
export default function Product(){


    return(

        <>
        <Layout>
     
      <Image  className={styles.image1} src={img} width={472} height={472} alt="" />
<Image className={styles.image2} src={img1} width={634} height={472} alt="" />
<Image className={styles.image1} src={img2} width={636} height={472} alt="" />
<Image className={styles.image1} src={img3} width={472} height={472} alt="" />

        </Layout>
        </>
    )
}


import React from 'react'
import ServiceItem from './ServiceItem'


const Services = () => {
  return (
    <div className="sectionS bg-dark text-light py-5 ">
        <div className="container">
        <section id="Services">
                <h1>Services</h1>  
                <div className="row">
                    <ServiceItem 
                        judul="Web Design"
                        deskripsi="Web desain adalah sebuah bentuk grafis dalam 
                                membuat suatu halaman web. Banyak orang yang masih belum 
                                tahu menahu tentang pengertian web desain. Bahkan beberapa diantara mereka masih melihat web desain 
                                hanya sebuah bentuk online jurnalisme saja. Seiring berkembangnya teknologi, internet memiliki nilai-nilai penting 
                                dari sebuah media yang oleh karena itu, bermunculan website tiap detiknya di seluruh dunia."
                    />
                    <ServiceItem 
                        judul="Video Editing"
                        deskripsi="editing video adalah suatu proses panjang dari pembuatan suatu video dimulai dari penyeleksian, 
                                penambahan meta teks/judul, variasi, transisi/perpindahan, effect yg dihasilkan, pemilihan lagu, sound effect, 
                                dan narasi, hingga mewarnai suatu hasil rekaman gambar mentah menjadi sebuah video yang mempunyai tampilan dan 
                                format video yang dibutuhkan untuk ditayangkan pada kebutuhan tertentu."
                    />
                    <ServiceItem 
                        judul="Digital Marketing"
                        deskripsi="Pemasaran Digital (Digital Marketing) adalah aktivitas pemasaran yang 
                        dilakukan oleh brand untuk menjangkau audiens potensial di internet menggunakan 
                        saluran digital seperti website, email, media sosial, dan sebagainya. Tujuan utama 
                        dari digital marketing itu sendiri adalah untuk menjangkau audiens yang aktif di 
                        dunia digital tidak hanya secara 1 arah, namun telah 2 arah dengan cepat, tepat, 
                        efektif, dan juga efisien."
                    />
                    <ServiceItem 
                        judul="Programmer"
                        deskripsi="Programmer adalah sebuah jenis profesi atau pekerjaan yang bertujuan 
                        untuk membuat sebuah sistem menggunakan bahasa pemrograman. Seseorang yang 
                        memiliki skill menulis kode program (syntax) dan merancang sistem, bisa juga 
                        disebut programmer. Kode atau bahasa program yang dimaksud seperti Java, 
                        Python, Javascript, PHP, dll.
                        Sistem yang sering kamu gunakan sehari-hari, seperti web, aplikasi Android, 
                        sistem operasi (Windows, Linux, iOS) dll."
                    />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Services
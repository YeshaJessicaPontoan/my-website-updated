import React from 'react'
import ButtonSaya from './ButtonSaya'

const AboutMe = () => {
  return (
    <section id="AboutMe">
    <div className="sectionA">
        <div className="row align-items-center">
            <div className="col-6 text-center">
                <img className="avatar" src="circle.png"/>
            </div>
            <div className="col-6 ">
                <h1>About Me</h1>
                <p>
                Saya Yesha Jessica Pontoan dari Universitas Klabat, saya merupakan 
                mahasiswa Fakultas Ilmu Komputer dan mengambil jurusan Sistem Informasi. 
                Saat ini saya sudah masuk semester yang ke lima. Saya merupakan anak kedua dari tiga bersaudara, 
                saya berasal dari daerah Bolaang Mongondow di desa Imandi. 
                </p>
                <p>
                Sejak saya duduk di bangku sekolah dasar sampai sekolah menengah saya termasuk anak yang aktif, 
                religious, dan mudah bergaul dengan teman-teman disekolah hal ini membuat saya memiliki simpati 
                yang tinggi terhadap orang-orang disekitar dan lingkungan saya, saya juga merupakan anak yang 
                cepat tanggap disekolah, saya selalu masuk peringkat satu sampai tiga teratas. Saya juga pernah 
                mengikuti perlombaan tarian tradisional waktu SD sampai ke tingkat kabupaten, pada saat itu saya 
                suka sekali menari. Begitu juga waktu saya duduk di bangku sekolah menengah atas, saya selalu masuk 
                peringkat 10 besar.                 
                </p>
                <ButtonSaya 
                text="Download CV" 
                warna="primary"
                link="https://github.com/YeshaJessicaPontoan" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
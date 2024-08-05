import "../styles/About.css"
import aboutUs from '../assets/images/aboutUs.jpg'



const AboutUs = () => {
    return (
       <section id="about" className="section-padding">
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='section-tittle'>
                  <h1 className='display-4 fw-semibold'>Acerca de Nosotros</h1>
                  <div className='separador'></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cupiditate vel sed eius quos ipsum saepe odio nemo reiciendis, beatae sapiente impedit delectus iusto at error aut corrupti nisi aperiam!</p>
                </div>
              </div>
            </div>
            <div className='row justify-content-between align-items-center'>
              <div className='col-lg-6'>
                <img className='img-fluid' src={aboutUs} alt="" />
              </div>
              <div className='col-lg-6'>
                <h1>About Elixir</h1>
                <p className='mt-3 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis, quidem vitae fuga consectetur tempore unde similique enim. Debitis tenetur omnis labore impedit beatae consectetur laudantium ut ea, aut fugiat.</p>
                <div className='d-flex pt-4 mb-3'>
                    <div className='iconbox me-4'>
                    <i className="ri-mail-send-fill"></i>
                    </div>
                    <div>
                      <h5>Somos geniales</h5>
                      <p>Consectetur adipisicing elit. Enim consectetur inventore odio?</p>
                    </div>
                  </div>
                  <div className='d-flex mb-3'>
                    <div className='iconbox me-4'>
                      <i className="ri-user-5-fill"></i>
                    </div>
                    <div>
                      <h5>Somos geniales</h5>
                      <p>Consectetur adipisicing elit. Enim consectetur inventore odio?</p>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <div className='iconbox me-4'>
                      <i className="ri-rocket-2-fill"></i>
                    </div>
                    <div>
                      <h5>Somos geniales</h5>
                      <p>Consectetur adipisicing elit. Enim consectetur inventore odio?</p>
                    </div>
                  </div>
              </div>   
            </div>
          </div>
       </section>
    )
}

export default AboutUs
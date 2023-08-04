import React from 'react'
import '../components/Pricing.css'
import { Button } from 'bootstrap'

function Pricing() {
  return (
    <section class="todo">

        <div class="container text-center">
            <div class="row  swswsw">
                <div >
                    <h4 class="tituloPricing">Pricing</h4>
                </div>
                <div class="col">

                    <div class="cuadro">
                        <div class="textosPricing">
                            <div class="subTitulo">
                                <h4>Members</h4>
                            </div>
                            <span>FREE</span>
                            <p>Browse and preview.<br/> Buy any workout you<br/>like for $2.50.</p>
                            <div class="text-center">
                                <button>GET THE APP</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col">

                    <div class="cuadro2">
                        <div class="textosPricing">
                            <div class="subTitulo">
                                <h4> Trainers Basic</h4>
                            </div>
                            <span>$4.99</span>
                            <p>Browse and preview.<br/> Buy any workout you<br/>like for $2.50.</p>
                            <div class="text-center">
                                <button>JOIN NOW</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col">

                    <div class="cuadro3">
                        <div class="textosPricing">
                            <div class="subTitulo">
                                <h4> Trainers Basic</h4>
                            </div>
                            <span>$4.99</span>
                            <p>Browse and preview.<br/> Buy any workout you<br/>like for $2.50.</p>
                            <div class="text-center">
                                <button>JOIN NOW</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Pricing
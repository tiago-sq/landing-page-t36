import React, { Component } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

class ParticlesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showParticles: true,
    };
  }

  componentDidMount() {
    // Define o tempo (em milissegundos) após o qual o componente será removido
    const removeAfterMillis = 10000; // Por exemplo, 5000ms = 5 segundos

    // Agende a remoção do componente após o tempo especificado
    setTimeout(() => {
      this.setState({ showParticles: false });
    }, removeAfterMillis);
  }

   // this customizes the component tsParticles installation
   async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadFireworksPreset(engine);
  }

  render() {
    const { showParticles } = this.state;

    if (!showParticles) {
      // Se showParticles for false, o componente não será renderizado
      return null;
    }

    const options = {
      preset: 'fireworks',
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesContainer;

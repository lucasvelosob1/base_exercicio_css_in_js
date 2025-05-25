import styled from 'styled-components'

const CabecalhoHeader = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoHeader>
    <h1>EBAC Jobs</h1>
  </CabecalhoHeader>
)

export default Cabecalho

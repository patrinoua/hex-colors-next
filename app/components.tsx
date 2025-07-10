import styled from 'styled-components'

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin-bottom: 100px;
`

export const ColorBox = styled.div`
  height: 50px;
  width: 50px;
  margin: 2px;

  font-size: 12px;
  font-weight: 800;
  background-color: ${(props) => props.color || 'black'};
  // border: 1px solid #ccc;
`

export const ColorCircle = styled.div`
  height: 30px;
  width: 30px;
  margin: 2px;
  border-radius: 50%; /* εδώ γίνεται η στρογγυλάδα */

  background-color: ${(props) => props.color || 'black'};
  // border: 1px solid #ccc;
`

export const ColorName = ({ colorName }) => (
  <div
    style={{
      width: '100%',
      marginTop: '20px',
    }}
  >
    {colorName}
  </div>
)

export const Inputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`

export const Input = styled.input`
  width: 50px;
  height: 35px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 2px; /* εδώ γίνεται η στρογγυλάδα */
`
export const ExperimentColorBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgb(
    ${(props) => props.r},
    ${(props) => props.g},
    ${(props) => props.b}
  );
  border: 2px solid #333;
`

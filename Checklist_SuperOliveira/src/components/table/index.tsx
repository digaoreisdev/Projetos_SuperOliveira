import { TableContainer, TransaciontsTable } from "./styles";
import { CircleWavyCheck, CircleWavyWarning } from 'phosphor-react';

export function ChecklistTable() {
  return (
    <TableContainer>
      <TransaciontsTable>
        <tbody>
          <th>Nº Checkist</th>
          <th>Origem</th>
          <th>Destino</th>
          <th>Motorista</th>
          <th>Veículo</th>
          <th>Dt. Gerado</th>
          <th>Dt. Finalizado</th>
          <th>Status</th>
          
          <tr>
            <td>60588</td>
            <td>Emp02 - Matriz</td>
            <td>Emp06 - Canoas</td>
            <td>Almir</td>
            <td>IHS3073</td>
            <td>03/12/2022 14:38:04</td>
            <td>03/12/2022 15:11:13</td>
            <td>
              <CircleWavyCheck color="#1ae05c" />
              Finalizado
            </td>
          </tr>
          <tr>
            <td>60615</td>
            <td>Emp01 - Atacado</td>
            <td>Emp03 - Parada 60</td>
            <td>Luis Ney</td>
            <td>IDD4242</td>
            <td>04/12/2022 16:30:26</td>
            <td>04/12/2022 18:00:30</td>
            <td>
              <div>
              <CircleWavyWarning color="#e0211a" />
              Com Divergências
              </div>
            </td>
          </tr>
          <tr>
            <td>60700</td>
            <td>Emp01 - Atacado</td>
            <td>Emp11 - 18 de Julho</td>
            <td>Alexandre</td>
            <td>IDE2330</td>
            <td>06/12/2022 14:00:01</td>
            <td> - </td>
            <td>
              <CircleWavyWarning color="#f3ef06" />
              Em Trânsito
            </td>
          </tr>
        </tbody>
      </TransaciontsTable>
    </TableContainer>
  )
}
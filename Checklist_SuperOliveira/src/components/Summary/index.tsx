import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowFatLinesRight, Checks, WarningCircle } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Checkist em Trânsito</span>
          <ArrowFatLinesRight size={32} color="#f3ef06" />
        </header>
        
        <strong>04 Checkist</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Checkist Finalizados</span>
          <Checks size={32} color="#1ae05c" />
        </header>
        
        <strong>02 Checkist</strong>
      </SummaryCard>
      <SummaryCard variant="red">
        <header>
          <span>Checkist com Divergências</span>
          <WarningCircle size={32} color="#fff" />
        </header>
        
        <strong>01 Checkist</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
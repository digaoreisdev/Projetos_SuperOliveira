import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowFatLinesRight, Checks, WarningCircle } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Checklist em Trânsito</span>
          <ArrowFatLinesRight size={32} color="#f3ef06" />
        </header>
        
        <strong>04 Checklist</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Checklist Finalizados</span>
          <Checks size={32} color="#1ae05c" />
        </header>
        
        <strong>02 Checklist</strong>
      </SummaryCard>
      <SummaryCard variant="red">
        <header>
          <span>Checklist com Divergências</span>
          <WarningCircle size={32} color="#fff" />
        </header>
        
        <strong>01 Checklist</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
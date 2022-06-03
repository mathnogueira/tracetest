import {StepType} from '@reactour/tour';
import GuidedTourService, {GuidedTours} from '../../services/GuidedTour.service';

export enum Steps {
  Diagram = 'diagram',
  SpanDetail = 'spanDetail',
  TestResults = 'testResults',
  Timeline = 'timeline',
  Graph = 'graph',
  Switcher = 'switcher',
}

const StepList: StepType[] = [
  {
    selector: GuidedTourService.getSelectorStep(GuidedTours.Trace, Steps.Graph),
    content: () => {
      return (
        <>
          <p>The trace view window shows you the trace generated from the triggering transaction.</p>
          <p>This is the Graph view showing the calling relationship between services.</p>
        </>
      );
    },
  },
  {
    selector: GuidedTourService.getSelectorStep(GuidedTours.Trace, Steps.Switcher),
    content: () => {
      return (
        <span>
          <p>
            You can view the complete trace in a graph view or you can see the trace in a timeline view by clicking the
            switcher
          </p>
        </span>
      );
    },
  },
];

export default StepList;

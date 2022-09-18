import StaticContextView from './StaticContextView';
import { Context, data } from '../../context/pages/StaticContext';

export default function StaticContext() {
  return (
    <Context.Provider value={data}>
      <StaticContextView />
    </Context.Provider>
  );
}

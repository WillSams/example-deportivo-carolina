import _ from 'lodash';
import { useEffect } from 'react';

const useLoadPage = ({ props, config }) => {
  const loads = config?.load;

  useEffect(() => {
    const dispatch = props.getDispatch?.();
    _.map(loads, (load) => {
      dispatch?.(load(props));
    });
  }, [props.teamId]);

  return;
};

export default useLoadPage;

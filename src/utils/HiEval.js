import HiGlobal from './HiGlobal';

function hiEval(data) {
  const JsonString = JSON.parse(data);
  if ('componentId' in JsonString) {
    HiGlobal[JsonString.componentId][JsonString.func.name](
      JsonString.func.params,
    );
  }
}

export default hiEval;

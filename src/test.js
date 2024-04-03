const poseDetection = require('@tensorflow-models/pose-detection');
const tf = require("@tensorflow/tfjs-core");

async function main() {
  const model = poseDetection.SupportedModels.BlazePose
  const detector = await poseDetection.createDetector(model);
  const poses = await detector.estimatePoses();
}

main();

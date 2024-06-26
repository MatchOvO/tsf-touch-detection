/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
import * as tf from '@tensorflow/tfjs-core';
export declare function argmax2d(inputs: tf.Tensor3D): tf.Tensor2D;
export declare function getPointsConfidence(heatmapScores: tf.TensorBuffer<tf.Rank.R3>, heatMapCoords: tf.TensorBuffer<tf.Rank.R2>): Float32Array;
export declare function getOffsetPoints(heatMapCoordsBuffer: tf.TensorBuffer<tf.Rank.R2>, outputStride: number, offsetsBuffer: tf.TensorBuffer<tf.Rank.R3>): tf.Tensor2D;
export declare function getOffsetVectors(heatMapCoordsBuffer: tf.TensorBuffer<tf.Rank.R2>, offsetsBuffer: tf.TensorBuffer<tf.Rank.R3>): tf.Tensor2D;
export declare function getOffsetPointsGPU(heatMapCoordsBuffer: tf.Tensor<tf.Rank.R2>, outputStride: number, offsetsBuffer: tf.Tensor<tf.Rank.R3>): tf.Tensor2D;

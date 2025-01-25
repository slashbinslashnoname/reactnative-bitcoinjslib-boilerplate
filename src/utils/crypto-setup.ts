/**
 * Crypto setup for React Native
 * Must be imported before any crypto operations
 */
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
import process from 'process';

declare global {
  // eslint-disable-next-line no-var
  var Buffer: any;
  // eslint-disable-next-line no-var
  var process: any;
}

global.Buffer = Buffer;
global.process = process; 
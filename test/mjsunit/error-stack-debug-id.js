// Copyright 2024 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function TestPrepareStackTraceCallbackWithDebugIdMagicComment() {
  let fileDebugIds = {};
  Error.prepareStackTrace = (error, frames) => {
    for (const frame of frames) {
      fileDebugIds[frame.getFileName().split(/[\/\\]/).pop()] = frame.getScriptDebugId();
    }
  };

  const error = new Error("foo");
  error.stack

  assertEquals(fileDebugIds, { "error-stack-debug-id.js": "c2e18445-4881-43f6-9e53-9951d3f3add4" });
})();

//# debugId=c2e18445-4881-43f6-9e53-9951d3f3add4

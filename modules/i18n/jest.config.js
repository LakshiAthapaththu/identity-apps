/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

module.exports = {
    globals: {
        "window": true
    },
    moduleFileExtensions: [ "js", "jsx", "ts", "tsx", "json", "node" ],
    moduleNameMapper: {
        "^lodash-es": "<rootDir>/../../node_modules/lodash"
    },
    modulePaths: [
        "<rootDir>"
    ],
    roots: [
        "src"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/test-configs/setup-test.js"
    ],
    testMatch: [ "<rootDir>/**/?(*.)test.{ts,tsx}" ],
    testPathIgnorePatterns: [
        "<rootDir>/(build|docs|node_modules)/"
    ],
    transform: {
        "^.+\\.(js|jsx)?$": "babel-jest",
        "^.+\\.(ts|tsx)?$": "ts-jest"
    },
    transformIgnorePatterns: [
        "/node_modules/?(?!@wso2is)"
    ],
    verbose: true
};

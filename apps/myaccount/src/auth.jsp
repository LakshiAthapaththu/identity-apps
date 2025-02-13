<%
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

    String authCode = (String) session.getAttribute("authCode");
    String sessionState = (String) session.getAttribute("sessionState");

    if(authCode == null) {
        authCode = "";
    }

    if(sessionState == null) {
        sessionState = "";
    }

    response.setHeader("Cache-Control","no-store");

    out.print("{\"authCode\": \""+authCode+"\", \"sessionState\": \""+sessionState+"\"}");

    authCode = "";
    sessionState = "";
    session.setAttribute("authCode", "");
    session.setAttribute("sessionState", "");
%>

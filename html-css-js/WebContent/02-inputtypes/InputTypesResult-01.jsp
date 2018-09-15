<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Input Types Results - Powered by webspark.net</title>
</head>
<body>
<h2>HTML5 Date And Time Types Results ::</h2>
Simple Date :: <%=request.getParameter("simpledate")%><br/>
Date And Time :: <%=request.getParameter("dateAndTime")%><br/>
Date And Time (Local) :: <%=request.getParameter("datetimelocal")%><br/>
Month And Year :: <%=request.getParameter("monthAndYear")%><br/>
Time :: <%=request.getParameter("usr_time")%><br/>
Week :: <%=request.getParameter("week_year")%><br/>


<h2>Validation Types Result ::</h2>
Email :: <%=request.getParameter("email")%><br/>
URL :: <%=request.getParameter("url")%><br/>


<h2>Other Types Result ::</h2>
Color :: <%=request.getParameter("color")%><br/>
Number :: <%=request.getParameter("number")%><br/>
Range :: <%=request.getParameter("range")%><br/>
Search :: <%=request.getParameter("search")%><br/>
Telephone :: <%=request.getParameter("tel")%><br/>
File :: <%=request.getParameter("file")%><br/>


</body>
</html>
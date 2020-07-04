import {LoggerFactory, LoggerFactoryOptions, LFService, LogGroupRule, LogLevel} from "typescript-logging";
 
const options = new LoggerFactoryOptions()

.addLogGroupRule(new LogGroupRule(new RegExp("asd"), LogLevel.Debug))
.addLogGroupRule(new LogGroupRule(new RegExp("asd"), LogLevel.Info));
 

export const factory = LFService.createNamedLoggerFactory("LoggerFactory", options);

//probar despues como debug e info
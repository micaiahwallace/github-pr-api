/**
 * Logging class to abstract logging implementation
 */
export class Logger {
  
  // Send message to log transport
  log(...messages: any[]): void {
    console.log(...messages)
  }

  // Log an informational message
  info(...messages: any[]): void {
    this.log("info:", ...messages)
  }
  
  // Log a warning message
  warn(...messages: any[]): void {
    this.log("warn:", ...messages)
  }

  // Log an error message
  error(...messages: any[]): void {
    this.log("error:", ...messages)
  }
}

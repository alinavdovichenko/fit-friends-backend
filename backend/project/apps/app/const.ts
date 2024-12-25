export enum PortRange {
  MinPort = 0,
  MaxPort = 65535,
}

export enum DefaultPorts {
  DefaultPort = 4000,
  DefaultPostgresPort = 5432,
  DefaultSmtpPort = 8025,
}

export enum EnvValidationMessage {
  EnvironmentRequired = 'environment is required',
  PortRequired = 'port is required',
  ServeRootRequired = 'Serve root is required',
  HostRequired = 'Host is required',
  UploadDirectoryRequired = 'Upload directory is required',
}

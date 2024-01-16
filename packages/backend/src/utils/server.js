const isDevelopmentHost = () => process.env.NODE_ENV === 'development';

const soccerTableName =
  process.env.NODE_ENV
    ? `Deportivo-${process.env.NODE_ENV}`
    : process.env.SOCCER_TABLE ?? 'DefaultTableName';

export { isDevelopmentHost, soccerTableName };


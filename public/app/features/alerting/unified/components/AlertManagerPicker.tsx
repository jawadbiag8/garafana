import { SelectableValue, GrafanaTheme2 } from '@grafana/data';
import { DataSourceType, GRAFANA_RULES_SOURCE_NAME } from '../utils/datasource';
import React, { FC, useMemo } from 'react';
import { Field, Select, useStyles2 } from '@grafana/ui';
import { getAllDataSources } from '../utils/config';
import { css } from '@emotion/css';

interface Props {
  onChange: (alertManagerSourceName: string) => void;
  current?: string;
  disabled?: boolean;
}

export const AlertManagerPicker: FC<Props> = ({ onChange, current, disabled = false }) => {
  const styles = useStyles2(getStyles);

  const options: Array<SelectableValue<string>> = useMemo(() => {
    return [
      {
        label: 'Grafana',
        value: GRAFANA_RULES_SOURCE_NAME,
        imgUrl: 'public/img/logo-Auto-orche.png',
        meta: {},
      },
      ...getAllDataSources()
        .filter((ds) => ds.type === DataSourceType.Alertmanager)
        .map((ds) => ({
          label: ds.name.substr(0, 37),
          value: ds.name,
          imgUrl: ds.meta.info.logos.small,
          meta: ds.meta,
        })),
    ];
  }, []);

  // no need to show the picker if there's only one option
  if (options.length === 1) {
    return null;
  }

  return (
    <Field
      className={styles.field}
      label={disabled ? 'Alert manager' : 'Choose alert manager'}
      disabled={disabled}
      data-testid="alertmanager-picker"
    >
      <Select
        width={29}
        className="ds-picker select-container"
        backspaceRemovesValue={false}
        onChange={(value) => value.value && onChange(value.value)}
        options={options}
        maxMenuHeight={500}
        noOptionsMessage="No datasources found"
        value={current}
        getOptionLabel={(o) => o.label}
      />
    </Field>
  );
};

const getStyles = (theme: GrafanaTheme2) => ({
  field: css`
    margin-bottom: ${theme.spacing(4)};
  `,
});

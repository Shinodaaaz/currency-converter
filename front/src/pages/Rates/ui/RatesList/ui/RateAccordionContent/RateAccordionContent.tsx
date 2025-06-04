import {
  Change,
  ContentWrapper,
  Label,
  Row,
  Value
} from "@/pages/Rates/ui/RatesList/ui/RateAccordionContent/RateAccordionContent.styles.ts";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import type {RateHistoryItem} from "@/store/api/rates.api.ts";
import {useWindowSize} from "@/shared/hooks/useWindowSize.ts";
import {BREAKPOINTS} from "@/shared/theme/breakpoints.ts";
import {colors} from "@/shared/theme/colors.ts";
import {memo} from "react";

interface Props {
  value: number;
  prevValue: number;
  history: RateHistoryItem[];
}

function filterByTimeStep(data: { timestamp: number, value: number }[],
  stepMs: number) {
  if (data.length === 0) return [];

  const result = [data[0]];
  let lastTimestamp = data[0].timestamp;

  for (let i = 1; i < data.length; i++) {
    if (data[i].timestamp - lastTimestamp >= stepMs) {
      result.push(data[i]);
      lastTimestamp = data[i].timestamp;
    }
  }

  return result;
}

const CustomTooltip = ({
  active,
  payload
}: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: colors.darkLight,
        border: '1px solid #ccc',
        padding: 10
      }}>
        <p>{`Time: ${payload[0].payload.timestamp}`}</p>
        <p>{`Value: $${payload[0].value.toFixed(6)}`}</p>
      </div>
    );
  }
  return null;
};

export const RateAccordionContent = memo(({
  value,
  prevValue,
  history
}: Props) => {
  const diff = value - prevValue;
  const isPositive = diff >= 0;
  const STEP_15_MIN = 15 * 60 * 1000;

  const rawChartData = history
    .filter((h) => h.merchant !== null)
    .map((h) => ({
      timestamp: h.timestamp,
      value: parseFloat(h.merchant as string),
    }));

  const chartData = filterByTimeStep(rawChartData,
    STEP_15_MIN)
    .map((item) => ({
      ...item,
      timestamp: new Date(item.timestamp).toLocaleTimeString(),
    }));

  const first = chartData[0]?.value;
  const last = chartData[chartData.length - 1]?.value;
  const isPositiveTrend = last >= first;

  const lineColor = isPositiveTrend ? '#4caf50' : '#f44336';
  const size = useWindowSize();
  const isMobile = size < BREAKPOINTS.tablet;

  return (
    <ContentWrapper>
      <Row>
        <Label>Current course:</Label>
        <Value>${value.toFixed(18)}</Value>
      </Row>
      <Row>
        <Label>Previous course:</Label>
        <Value>${prevValue.toFixed(18)}</Value>
      </Row>
      <Row>
        <Label>Change:</Label>
        <Change $positive={isPositive}>
          ${isPositive ? '+' : ''}
          {diff.toFixed(18)}
        </Change>
      </Row>

      {chartData.length > 0 && (
        <div style={{
          width: '100%',
          height: 200
        }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="timestamp"
                tick={{fontSize: 10}}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={50}
              />
              <YAxis
                tickFormatter={(v) => `$${v.toFixed(2)}`}
                interval="preserveStartEnd"
                width={isMobile ? 65 : 80}
                tick={{
                  fontSize: 10,
                  fill: '#666'
                }}
                dy={4}
                tickMargin={10}
                scale={'log'}
                domain={['auto', 'auto']}
              />

              <Tooltip content={CustomTooltip}/>
              <Line type="monotone" dataKey="value" stroke={lineColor} strokeWidth={2} dot={false}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </ContentWrapper>
  );
});

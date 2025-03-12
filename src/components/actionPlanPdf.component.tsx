import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from '../utils/stylePdf.utils';
import { DownloadButtonProps } from '../types/generics.types';

const PlanDeAccionPDF = ({
  formattedDate,
  prospectsNeeded,
  monthlyPresentations,
  weeklyPresentations,
}: DownloadButtonProps) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Tu Plan de Acción</Text>
      <Text style={styles.text}>Fecha: {formattedDate}</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Datos del Plan:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nuevos Datos a Prospectar:</Text>
          <Text style={styles.value}>{prospectsNeeded}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mínimo Presentaciones por Mes:</Text>
          <Text style={styles.value}>{Math.floor(monthlyPresentations)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Mínimo Presentaciones por Semana:</Text>
          <Text style={styles.value}>{weeklyPresentations}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Capacitación Mínima Sugerida:</Text>
          <Text style={styles.value}>
            20hs semanales Entre Campus Virtual y Oficina
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
export default PlanDeAccionPDF;

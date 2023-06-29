# `data_hcp_vault_cluster`

Refer to the Terraform Registory for docs: [`data_hcp_vault_cluster`](https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster).

# `dataHcpVaultCluster` Submodule <a name="`dataHcpVaultCluster` Submodule" id="@cdktf/provider-hcp.dataHcpVaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultCluster <a name="DataHcpVaultCluster" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultCluster(scope Construct, id *string, config DataHcpVaultClusterConfig) DataHcpVaultCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig">DataHcpVaultClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig">DataHcpVaultClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig">PutMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig">ResetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig">ResetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig"></a>

```go
func PutAuditLogConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricsConfig` <a name="PutMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig"></a>

```go
func PutMetricsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts"></a>

```go
func PutTimeouts(value DataHcpVaultClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

---

##### `ResetAuditLogConfig` <a name="ResetAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetAuditLogConfig"></a>

```go
func ResetAuditLogConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetMetricsConfig` <a name="ResetMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetMetricsConfig"></a>

```go
func ResetMetricsConfig()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.DataHcpVaultCluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.DataHcpVaultCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.DataHcpVaultCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider">CloudProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId">HvnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig">MajorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig">MetricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion">MinVaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter">PathsFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink">PrimaryLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint">PublicEndpoint</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl">VaultPrivateEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl">VaultPublicEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion">VaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput">MetricsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfig"></a>

```go
func AuditLogConfig() DataHcpVaultClusterAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList">DataHcpVaultClusterAuditLogConfigList</a>

---

##### `CloudProvider`<sup>Required</sup> <a name="CloudProvider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.cloudProvider"></a>

```go
func CloudProvider() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HvnId`<sup>Required</sup> <a name="HvnId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.hvnId"></a>

```go
func HvnId() *string
```

- *Type:* *string

---

##### `MajorVersionUpgradeConfig`<sup>Required</sup> <a name="MajorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.majorVersionUpgradeConfig"></a>

```go
func MajorVersionUpgradeConfig() DataHcpVaultClusterMajorVersionUpgradeConfigList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList">DataHcpVaultClusterMajorVersionUpgradeConfigList</a>

---

##### `MetricsConfig`<sup>Required</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfig"></a>

```go
func MetricsConfig() DataHcpVaultClusterMetricsConfigList
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList">DataHcpVaultClusterMetricsConfigList</a>

---

##### `MinVaultVersion`<sup>Required</sup> <a name="MinVaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.minVaultVersion"></a>

```go
func MinVaultVersion() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

##### `PathsFilter`<sup>Required</sup> <a name="PathsFilter" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.pathsFilter"></a>

```go
func PathsFilter() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryLink`<sup>Required</sup> <a name="PrimaryLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.primaryLink"></a>

```go
func PrimaryLink() *string
```

- *Type:* *string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.publicEndpoint"></a>

```go
func PublicEndpoint() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeouts"></a>

```go
func Timeouts() DataHcpVaultClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference">DataHcpVaultClusterTimeoutsOutputReference</a>

---

##### `VaultPrivateEndpointUrl`<sup>Required</sup> <a name="VaultPrivateEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPrivateEndpointUrl"></a>

```go
func VaultPrivateEndpointUrl() *string
```

- *Type:* *string

---

##### `VaultPublicEndpointUrl`<sup>Required</sup> <a name="VaultPublicEndpointUrl" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultPublicEndpointUrl"></a>

```go
func VaultPublicEndpointUrl() *string
```

- *Type:* *string

---

##### `VaultVersion`<sup>Required</sup> <a name="VaultVersion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.vaultVersion"></a>

```go
func VaultVersion() *string
```

- *Type:* *string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.auditLogConfigInput"></a>

```go
func AuditLogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricsConfigInput`<sup>Optional</sup> <a name="MetricsConfigInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.metricsConfigInput"></a>

```go
func MetricsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultClusterAuditLogConfig <a name="DataHcpVaultClusterAuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

&datahcpvaultcluster.DataHcpVaultClusterAuditLogConfig {

}
```


### DataHcpVaultClusterConfig <a name="DataHcpVaultClusterConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

&datahcpvaultcluster.DataHcpVaultClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	AuditLogConfig: interface{},
	Id: *string,
	MetricsConfig: interface{},
	ProjectId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcp-go/hcp/v6.dataHcpVaultCluster.DataHcpVaultClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>interface{}</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig">MetricsConfig</a></code> | <code>interface{}</code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#cluster_id DataHcpVaultCluster#cluster_id}

---

##### `AuditLogConfig`<sup>Optional</sup> <a name="AuditLogConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.auditLogConfig"></a>

```go
AuditLogConfig interface{}
```

- *Type:* interface{}

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#audit_log_config DataHcpVaultCluster#audit_log_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#id DataHcpVaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetricsConfig`<sup>Optional</sup> <a name="MetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.metricsConfig"></a>

```go
MetricsConfig interface{}
```

- *Type:* interface{}

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#metrics_config DataHcpVaultCluster#metrics_config}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The ID of the HCP project where the Vault cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#project_id DataHcpVaultCluster#project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterConfig.property.timeouts"></a>

```go
Timeouts DataHcpVaultClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts">DataHcpVaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#timeouts DataHcpVaultCluster#timeouts}

---

### DataHcpVaultClusterMajorVersionUpgradeConfig <a name="DataHcpVaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

&datahcpvaultcluster.DataHcpVaultClusterMajorVersionUpgradeConfig {

}
```


### DataHcpVaultClusterMetricsConfig <a name="DataHcpVaultClusterMetricsConfig" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

&datahcpvaultcluster.DataHcpVaultClusterMetricsConfig {

}
```


### DataHcpVaultClusterTimeouts <a name="DataHcpVaultClusterTimeouts" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

&datahcpvaultcluster.DataHcpVaultClusterTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs/data-sources/vault_cluster#default DataHcpVaultCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultClusterAuditLogConfigList <a name="DataHcpVaultClusterAuditLogConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterAuditLogConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpVaultClusterAuditLogConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get"></a>

```go
func Get(index *f64) DataHcpVaultClusterAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHcpVaultClusterAuditLogConfigOutputReference <a name="DataHcpVaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterAuditLogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpVaultClusterAuditLogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```go
func DatadogRegion() *string
```

- *Type:* *string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```go
func GrafanaEndpoint() *string
```

- *Type:* *string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```go
func GrafanaUser() *string
```

- *Type:* *string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```go
func SplunkHecendpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHcpVaultClusterMajorVersionUpgradeConfigList <a name="DataHcpVaultClusterMajorVersionUpgradeConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterMajorVersionUpgradeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpVaultClusterMajorVersionUpgradeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get"></a>

```go
func Get(index *f64) DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference <a name="DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterMajorVersionUpgradeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">MaintenanceWindowDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">MaintenanceWindowTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">UpgradeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceWindowDay`<sup>Required</sup> <a name="MaintenanceWindowDay" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```go
func MaintenanceWindowDay() *string
```

- *Type:* *string

---

##### `MaintenanceWindowTime`<sup>Required</sup> <a name="MaintenanceWindowTime" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```go
func MaintenanceWindowTime() *string
```

- *Type:* *string

---

##### `UpgradeType`<sup>Required</sup> <a name="UpgradeType" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```go
func UpgradeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataHcpVaultClusterMajorVersionUpgradeConfig
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMajorVersionUpgradeConfig">DataHcpVaultClusterMajorVersionUpgradeConfig</a>

---


### DataHcpVaultClusterMetricsConfigList <a name="DataHcpVaultClusterMetricsConfigList" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterMetricsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataHcpVaultClusterMetricsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get"></a>

```go
func Get(index *f64) DataHcpVaultClusterMetricsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHcpVaultClusterMetricsConfigOutputReference <a name="DataHcpVaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterMetricsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataHcpVaultClusterMetricsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion">DatadogRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">GrafanaEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser">GrafanaUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">SplunkHecendpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogRegion`<sup>Required</sup> <a name="DatadogRegion" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```go
func DatadogRegion() *string
```

- *Type:* *string

---

##### `GrafanaEndpoint`<sup>Required</sup> <a name="GrafanaEndpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```go
func GrafanaEndpoint() *string
```

- *Type:* *string

---

##### `GrafanaUser`<sup>Required</sup> <a name="GrafanaUser" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```go
func GrafanaUser() *string
```

- *Type:* *string

---

##### `SplunkHecendpoint`<sup>Required</sup> <a name="SplunkHecendpoint" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```go
func SplunkHecendpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataHcpVaultClusterTimeoutsOutputReference <a name="DataHcpVaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcp-go/hcp/v6/datahcpvaultcluster"

datahcpvaultcluster.NewDataHcpVaultClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcpVaultClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpVaultCluster.DataHcpVaultClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




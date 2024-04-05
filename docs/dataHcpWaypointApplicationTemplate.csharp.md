# `dataHcpWaypointApplicationTemplate` Submodule <a name="`dataHcpWaypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpWaypointApplicationTemplate <a name="DataHcpWaypointApplicationTemplate" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplate(Construct Scope, string Id, DataHcpWaypointApplicationTemplateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig">DataHcpWaypointApplicationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig">DataHcpWaypointApplicationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpWaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpWaypointApplicationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpWaypointApplicationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpWaypointApplicationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

DataHcpWaypointApplicationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcpWaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpWaypointApplicationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpWaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpWaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.readmeMarkdownTemplate">ReadmeMarkdownTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">TerraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformNoCodeModule">TerraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference">DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ReadmeMarkdownTemplate`<sup>Required</sup> <a name="ReadmeMarkdownTemplate" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```csharp
public string ReadmeMarkdownTemplate { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `TerraformCloudWorkspaceDetails`<sup>Required</sup> <a name="TerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```csharp
public DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference TerraformCloudWorkspaceDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `TerraformNoCodeModule`<sup>Required</sup> <a name="TerraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```csharp
public DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference TerraformNoCodeModule { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference">DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpWaypointApplicationTemplateConfig <a name="DataHcpWaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.id">Id</a></code> | <code>string</code> | The ID of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID of the HCP project where the Waypoint Application Template is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/waypoint_application_template#id DataHcpWaypointApplicationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/waypoint_application_template#name DataHcpWaypointApplicationTemplate#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.86.0/docs/data-sources/waypoint_application_template#project_id DataHcpWaypointApplicationTemplate#project_id}

---

### DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails {

};
```


### DataHcpWaypointApplicationTemplateTerraformNoCodeModule <a name="DataHcpWaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplateTerraformNoCodeModule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">TerraformProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformProjectId`<sup>Required</sup> <a name="TerraformProjectId" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```csharp
public string TerraformProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```csharp
public DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails">DataHcpWaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---


### DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule">DataHcpWaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```csharp
public DataHcpWaypointApplicationTemplateTerraformNoCodeModule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpWaypointApplicationTemplate.DataHcpWaypointApplicationTemplateTerraformNoCodeModule">DataHcpWaypointApplicationTemplateTerraformNoCodeModule</a>

---




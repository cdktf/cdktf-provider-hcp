# `dataHcpHvnRoute` Submodule <a name="`dataHcpHvnRoute` Submodule" id="@cdktf/provider-hcp.dataHcpHvnRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpHvnRoute <a name="DataHcpHvnRoute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route hcp_hvn_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

new dataHcpHvnRoute.DataHcpHvnRoute(scope: Construct, id: string, config: DataHcpHvnRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig">DataHcpHvnRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig">DataHcpHvnRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcpHvnRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpHvnRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isConstruct"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

dataHcpHvnRoute.DataHcpHvnRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformElement"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

dataHcpHvnRoute.DataHcpHvnRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformDataSource"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

dataHcpHvnRoute.DataHcpHvnRoute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataHcpHvnRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcpHvnRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcpHvnRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpHvnRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.azureConfig">azureConfig</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList">DataHcpHvnRouteAzureConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.targetLink">targetLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference">DataHcpHvnRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnLinkInput">hvnLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnRouteIdInput">hvnRouteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnLink">hvnLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnRouteId">hvnRouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `azureConfig`<sup>Required</sup> <a name="azureConfig" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.azureConfig"></a>

```typescript
public readonly azureConfig: DataHcpHvnRouteAzureConfigList;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList">DataHcpHvnRouteAzureConfigList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetLink`<sup>Required</sup> <a name="targetLink" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.targetLink"></a>

```typescript
public readonly targetLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference">DataHcpHvnRouteTimeoutsOutputReference</a>

---

##### `hvnLinkInput`<sup>Optional</sup> <a name="hvnLinkInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnLinkInput"></a>

```typescript
public readonly hvnLinkInput: string;
```

- *Type:* string

---

##### `hvnRouteIdInput`<sup>Optional</sup> <a name="hvnRouteIdInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnRouteIdInput"></a>

```typescript
public readonly hvnRouteIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataHcpHvnRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a>

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnLink"></a>

```typescript
public readonly hvnLink: string;
```

- *Type:* string

---

##### `hvnRouteId`<sup>Required</sup> <a name="hvnRouteId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.hvnRouteId"></a>

```typescript
public readonly hvnRouteId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpHvnRouteAzureConfig <a name="DataHcpHvnRouteAzureConfig" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfig.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

const dataHcpHvnRouteAzureConfig: dataHcpHvnRoute.DataHcpHvnRouteAzureConfig = { ... }
```


### DataHcpHvnRouteConfig <a name="DataHcpHvnRouteConfig" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

const dataHcpHvnRouteConfig: dataHcpHvnRoute.DataHcpHvnRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.hvnLink">hvnLink</a></code> | <code>string</code> | The `self_link` of the HashiCorp Virtual Network (HVN). |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.hvnRouteId">hvnRouteId</a></code> | <code>string</code> | The ID of the HVN route. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#id DataHcpHvnRoute#id}. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the HVN route is located. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hvnLink`<sup>Required</sup> <a name="hvnLink" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.hvnLink"></a>

```typescript
public readonly hvnLink: string;
```

- *Type:* string

The `self_link` of the HashiCorp Virtual Network (HVN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#hvn_link DataHcpHvnRoute#hvn_link}

---

##### `hvnRouteId`<sup>Required</sup> <a name="hvnRouteId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.hvnRouteId"></a>

```typescript
public readonly hvnRouteId: string;
```

- *Type:* string

The ID of the HVN route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#hvn_route_id DataHcpHvnRoute#hvn_route_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#id DataHcpHvnRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the HVN route is located.

Always matches the project ID in `hvn_link`. Setting this attribute is deprecated, but it will remain usable in read-only form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#project_id DataHcpHvnRoute#project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcpHvnRouteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#timeouts DataHcpHvnRoute#timeouts}

---

### DataHcpHvnRouteTimeouts <a name="DataHcpHvnRouteTimeouts" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

const dataHcpHvnRouteTimeouts: dataHcpHvnRoute.DataHcpHvnRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#default DataHcpHvnRoute#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.1/docs/data-sources/hvn_route#default DataHcpHvnRoute#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpHvnRouteAzureConfigList <a name="DataHcpHvnRouteAzureConfigList" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

new dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.get"></a>

```typescript
public get(index: number): DataHcpHvnRouteAzureConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataHcpHvnRouteAzureConfigOutputReference <a name="DataHcpHvnRouteAzureConfigOutputReference" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

new dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.nextHopIpAddress">nextHopIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.nextHopType">nextHopType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfig">DataHcpHvnRouteAzureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextHopIpAddress`<sup>Required</sup> <a name="nextHopIpAddress" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.nextHopIpAddress"></a>

```typescript
public readonly nextHopIpAddress: string;
```

- *Type:* string

---

##### `nextHopType`<sup>Required</sup> <a name="nextHopType" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.nextHopType"></a>

```typescript
public readonly nextHopType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataHcpHvnRouteAzureConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteAzureConfig">DataHcpHvnRouteAzureConfig</a>

---


### DataHcpHvnRouteTimeoutsOutputReference <a name="DataHcpHvnRouteTimeoutsOutputReference" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcpHvnRoute } from '@cdktf/provider-hcp'

new dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHcpHvnRouteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.dataHcpHvnRoute.DataHcpHvnRouteTimeouts">DataHcpHvnRouteTimeouts</a>

---



